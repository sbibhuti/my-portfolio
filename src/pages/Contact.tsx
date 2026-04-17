import { useState, type FormEvent } from 'react'
import TerminalHeader from '../components/ui/TerminalHeader'
import InputField from '../components/ui/InputField'
import Button from '../components/ui/Button'
import { Typography } from '../components/ui/Typography'
import {
  CircleCheck,
  EthernetPort,
  Info,
  Link2,
  Lock,
  SendHorizontal,
  SquareTerminal,
} from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16">
      <div className="grid w-full max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-12">
        {/* CONTACT SIDEBAR */}
        <div className="flex flex-col gap-4 md:col-span-4">
          {/* CONTACT INFO */}
          <div className="bg-surface-container-low border-outline-variant/20 rounded-md border p-6">
            <Typography
              as="h2"
              variant="sectionTitle"
              color="primary"
              className="mb-4 font-mono text-xs"
            >
              // DIRECT_CONTACT
            </Typography>
            <div className="space-y-6">
              <div>
                <Typography
                  as="p"
                  variant="caption"
                  color="muted"
                  className="font-mono text-[11px] tracking-tight uppercase"
                >
                  Email
                </Typography>
                <Typography as="p" variant="bodySmall" color="secondary" className="font-mono text-sm">
                  bibhutisunari11@gmail.com
                </Typography>
              </div>
              <div>
                <Typography
                  as="p"
                  variant="caption"
                  color="muted"
                  className="font-mono text-[11px] tracking-tight uppercase"
                >
                  Phone
                </Typography>
                <Typography as="p" variant="bodySmall" className="font-mono text-sm">
                  +91 (845) 794-7365
                </Typography>
              </div>
              <div>
                <Typography
                  as="p"
                  variant="caption"
                  color="muted"
                  className="font-mono text-[11px] tracking-tight uppercase"
                >
                  Location
                </Typography>
                <Typography as="p" variant="bodySmall" className="font-mono text-sm">
                  Odisha, India [GMT+5:30]
                </Typography>
              </div>
              {/* SOCIAL */}
              <div className="border-outline-variant/20 border-t pt-4">
                <Typography
                  as="p"
                  variant="caption"
                  color="muted"
                  className="mb-3 font-mono text-[11px] tracking-tight uppercase"
                >
                  Social.sys
                </Typography>
                <div className="flex gap-2">
                  <Link2
                    size={20}
                    className="text-on-surface-variant hover:text-tertiary cursor-pointer"
                  />
                  <EthernetPort
                    size={20}
                    className="text-on-surface-variant hover:text-tertiary cursor-pointer"
                  />
                  <SquareTerminal
                    size={20}
                    className="text-on-surface-variant hover:text-tertiary cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* SYSTEM STATUS */}
          <div className="bg-secondary-container/15 border-outline-variant/20 rounded-md border p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">
                info
              </span>
              <Info className="text-secondary" size={11} />
            </div>
            <Typography
              as="p"
              variant="bodySmall"
              color="secondary"
              className="font-mono text-[12px] leading-relaxed"
            >
              Ready to process new connection requests. Latency: 12ms. Status:
              Open for collaborations.
            </Typography>
          </div>
        </div>
        {/* CONTACT FORM */}
        <div className="w-full md:col-span-8">
          <div className="bg-surface-container border-outline-variant/20 overflow-hidden rounded-lg border shadow-xl">
            {/* HEADER */}
            <TerminalHeader
              title="contact_request.json"
              icon={
                <span className="material-symbols-outlined hidden sm:flex text-primary mr-2 text-sm">
                  {'[UTF-8]'}
                </span>
              }
            />
            {/* FORM BODY */}
            <div className="p-8">
              <div className="mb-8">
                <Typography as="h1" variant="h2" className="mb-2 text-2xl font-bold">
                  Initialize Connection
                </Typography>
                <Typography as="p" variant="bodySmall" color="primary" className="text-sm">
                  Submit a structured request to initiate a technical discussion
                  or inquiry.
                </Typography>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <InputField
                    label="User.Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                  />
                  <InputField
                    label="User.Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                  />
                </div>
                <InputField
                  label="Request.Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Specify context (Project, Hire, Coffee)"
                  required
                />
                <InputField
                  as="textarea"
                  label="Request.Payload"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your detailed message here..."
                  required
                />
                {/* SUBMIT */}
                <div className="flex justify-end pt-4">
                  <Button type="submit">
                    Send Message <SendHorizontal size={16} />
                  </Button>
                </div>
              </form>
            </div>
            {/* FOOTER */}
            <div className="bg-surface-container-low border-outline-variant/20 flex items-center justify-between border-t px-8 py-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <CircleCheck className="text-secondary" size={14} />
                  <Typography as="span" variant="caption" color="muted" className="font-mono text-[11px]">
                    Validated
                  </Typography>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="text-primary" size={14} />
                  <Typography as="span" variant="caption" color="muted" className="font-mono text-[11px]">
                    Encrypted
                  </Typography>
                </div>
              </div>
              <Typography as="span" variant="caption" className="text-on-surface-variant/60 font-mono text-[11px]">
                v2.4.0-stable
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
