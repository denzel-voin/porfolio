import { NextRequest, NextResponse } from 'next/server';
import emailjs from 'emailjs-com';

export async function POST(req: NextRequest) {
    try {
        const { email, subject, message } = await req.json();

        console.log('Sending email with data:', { email, subject, message });

        const result = await emailjs.send(
            'service_kv8niie',
            'template_3eq02kh',
            { email, subject, message },
            '2EF8QY_NUkR0pdObp'
        );

        console.log('Email sent successfully:', result);

        return NextResponse.json({ message: 'Email sent successfully', result }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
    }
}
