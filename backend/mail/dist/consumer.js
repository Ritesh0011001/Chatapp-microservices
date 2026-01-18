import amqp from 'amqplib';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
export const startSendOtpConsumer = async () => {
    try {
        const connection = await amqp.connect({
            protocol: "amqp",
            hostname: process.env.Rabbitmq_Host,
            port: 5672,
            username: process.env.Rabbitmq_Username,
            password: process.env.Rabbitmq_Password,
        });
        const channel = await connection.createChannel();
        const queueName = "send-otp";
        await channel.assertQueue(queueName, { durable: true });
        console.log("✅ Mail Service consumer started , listening for otp emails");
        channel.consume(queueName, async (msg) => {
            if (msg) {
                try {
                }
                catch (error) {
                }
            }
        });
    }
    catch (error) {
        console.log("Failed to connect to rabbitmq consumer", error);
    }
};
//# sourceMappingURL=consumer.js.map