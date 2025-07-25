"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// Schema de validación con Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(10, "Subject must be at least 10 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const getActualTime = () => {
  const now = new Date();
  return now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      contactSchema.shape[name].parse(value);
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.issues[0];
        if (firstError) {
          setErrors((prev) => ({ ...prev, [name]: firstError.message }));
        }
      }
    }
  };

  const handleInputChange = (name: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Validar el campo cuando el usuario termine de escribir
    if (value.length > 0) {
      validateField(name, value);
    } else {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    // Validar todos los campos
    try {
      contactSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: getActualTime(),
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Success:", result);
      setSubmitStatus("success");

      toast({
        title: "Message sent successfully! ✅",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("FAILED...", error);
      setSubmitStatus("error");

      toast({
        title: "Failed to send message ❌",
        description:
          "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);

      // Resetear el estado después de 3 segundos
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          {/* Status Message */}
          {submitStatus !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
                submitStatus === "success"
                  ? "bg-green-500/10 border border-green-500/30 text-green-400"
                  : "bg-red-500/10 border border-red-500/30 text-red-400"
              }`}
            >
              {submitStatus === "success" ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  <span>Message sent successfully!</span>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4" />
                  <span>Failed to send message. Please try again.</span>
                </>
              )}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 ${
                  errors.name ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 ${
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 ${
                  errors.subject ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {errors.subject}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 resize-none ${
                  errors.message ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {errors.message}
                </motion.p>
              )}
              <div className="text-right text-xs text-zinc-500">
                {formData.message.length}/1000 characters
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
