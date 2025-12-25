"use client";
import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";
import styles from "./ModalForm.module.css";

// ✅ Import Lucide Icons
import {
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
} from "lucide-react";

const ModalForm = ({ onSubmit, onClose, formType = "default" }) => {
  const [form] = Form.useForm();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const isAutomationForm = formType === "automation";

  const submitButton = isAutomationForm
    ? "Request Custom Automation"
    : "Submit";

  const Label = ({ icon: Icon, text, required }) => (
    <div className={styles.labelWrapper}>
      <Icon size={16} className={styles.labelIcon} />
      <span>{text}</span>
    </div>
  );

  const handleFinish = async (values) => {
    try {
      setLoading(true);

      const data = {
        name: values.fullname,
        email: values.email,
        phone: phone || "",
        company: values.company || "NA",
        description: values.description?.trim() || "NA",
        formType: isAutomationForm
          ? "Request Custom Automation for AI Agents"
          : "Schedule a Call Form",
      };

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success(
          isAutomationForm
            ? "✅ Your automation request has been submitted!"
            : "📞 Your call request has been sent!"
        );

        form.resetFields();
        setPhone("");
        onSubmit?.(data);
      } else {
        toast.error("❌ Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className={styles.formBody}
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              name="fullname"
              label={<Label icon={User} text="Full Name" required />}
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input
                placeholder="Enter your full name"
                className={styles.inputField}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="email"
              label={<Label icon={Mail} text="Email Address" required />}
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                placeholder="Enter your email"
                className={styles.inputField}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              name="phone"
              label={<Label icon={Phone} text="Phone Number" required />}
              rules={[{ required: true, message: "Please enter your phone number" }]}
            >
              <PhoneInput
                country="in"
                value={phone}
                onChange={(value) => {
                  setPhone(value);
                  form.setFieldsValue({ phone: value });
                }}
                inputClass={styles.phoneInput}
                containerClass={styles.phoneContainer}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="company"
              label={<Label icon={Building2} text="Company (Optional)" />}
            >
              <Input
                placeholder="Enter your company name"
                className={styles.inputField}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="description"
          label={
            <Label
              icon={MessageSquare}
              text="Tell us about your needs"
              required={isAutomationForm}
            />
          }
          rules={[
            {
              required: isAutomationForm,
              message: "Please describe your automation needs",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Describe your project, challenges or what you'd like to discuss..."
            className={styles.textareaField}
          />
        </Form.Item>

        <div className={styles.buttonRow}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>

          <Button
            htmlType="submit"
            loading={loading}
            className={styles.submitButton}
          >
            {loading ? "Processing..." : submitButton}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ModalForm;
