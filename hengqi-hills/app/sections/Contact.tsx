"use client";

import { CheckCircle2, Mail, MapPin } from "lucide-react";
import { useState } from "react";

import { SectionTitle } from "@/app/components/SectionTitle";

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitted(false);
    setSubmitting(true);
    try {
      if (!CONTACT_ENDPOINT) {
        setError("未配置表单提交地址。");
        return;
      }
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...form,
          source: "hengqi-hills",
          page: typeof window !== "undefined" ? window.location.href : ""
        })
      });

      if (!res.ok) {
        setError("提交失败，请稍后重试。");
        return;
      }

      setSubmitted(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setError("网络异常，请检查网络后重试。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle
              label="CONTACT"
              title="开启合作"
              subtitle="投资咨询 / 合作洽谈 / 场地与品牌联动"
              align="left"
            />

            <div className="mt-10 space-y-6 text-sm text-text-secondary md:text-base">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-none text-primary" />
                <span>2643829473@qq.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-none text-primary" />
                <span>中国 北京市 海淀区学院路学清苑</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface/40 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                  微信二维码
                </p>
                <div className="mt-6 flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-text-tertiary">
                  占位区域
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-surface/40 p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-text-primary placeholder:text-text-tertiary outline-none focus:border-primary"
                  placeholder="姓名"
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  required
                />
                <input
                  className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-text-primary placeholder:text-text-tertiary outline-none focus:border-primary"
                  placeholder="邮箱"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  required
                />
              </div>

              <input
                className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-text-primary placeholder:text-text-tertiary outline-none focus:border-primary"
                placeholder="公司"
                value={form.company}
                onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
              />

              <textarea
                className="min-h-32 w-full resize-none rounded-lg border border-white/10 bg-surface px-4 py-3 text-text-primary placeholder:text-text-tertiary outline-none focus:border-primary"
                placeholder="留言内容"
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                required
              />

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-medium text-black transition-opacity disabled:opacity-60"
              >
                {submitting ? "提交中..." : "提交"}
              </button>

              {error ? (
                <div className="text-sm text-rose-400">{error}</div>
              ) : null}

              {submitted ? (
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>提交成功，我们会尽快联系你。</span>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
