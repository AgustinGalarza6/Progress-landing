const nodemailer = require('nodemailer');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, company, type, message } = data;

    // Backend validation
    if (!name || !email || !type || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Faltan campos obligatorios.' }), { status: 400 });
    }
    if (typeof name !== 'string' || typeof email !== 'string' || typeof type !== 'string' || typeof message !== 'string') {
      return new Response(JSON.stringify({ ok: false, error: 'Datos inválidos.' }), { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Email inválido.' }), { status: 400 });
    }
    if (message.length > 2000) {
      return new Response(JSON.stringify({ ok: false, error: 'Mensaje demasiado largo.' }), { status: 400 });
    }

    // Simple anti-spam: rechaza si el mensaje contiene URLs sospechosas
    if (/https?:\/\//i.test(message)) {
      return new Response(JSON.stringify({ ok: false, error: 'No se permiten links en el mensaje.' }), { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const toEmail = process.env.TO_EMAIL || 'Pil@progressinline.com';
    const forwardEmail = process.env.FORWARD_EMAIL || 'info.tecno.one@gmail.com';

    if (!smtpHost || !smtpUser || !smtpPass) {
      return new Response(JSON.stringify({ ok: false, error: 'SMTP no configurado en variables de entorno' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `[Contacto Web] ${type} - ${company || 'Sin empresa'}`;
    const html = `
      <h3>Nuevo contacto desde landing</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Tipo:</strong> ${type}</p>
      <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // Enviar al mailbox corporativo
    await transporter.sendMail({
      from: smtpUser,
      to: toEmail,
      subject,
      html,
      replyTo: email,
    });

    // Enviar copia a la cuenta personal configurada (forward)
    if (forwardEmail) {
      await transporter.sendMail({
        from: smtpUser,
        to: forwardEmail,
        subject: `[Copia] ${subject}`,
        html,
        replyTo: email,
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: err.message || String(err) }), { status: 500 });
  }
}
