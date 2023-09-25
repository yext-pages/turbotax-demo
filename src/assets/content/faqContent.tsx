import { FaqItemProps } from "../../components/indpro/FaqItem";
import BaseLink from "../../components/atoms/Link";

const VerifiedPro = () => <span className={"font-semibold"}>Intuit TurboTax Verified Pro</span>;

const LinkDestinations = {
  auditSupportGuarantee:
    "https://ttlc.intuit.com/community/charges-and-fees/help/what-is-the-turbotax-audit-support-guarantee/00/26143",
} as const;

const Link: React.FC<{ to: keyof typeof LinkDestinations }> = (props) => (
  <BaseLink
    action={"engaged"}
    object={"faq link"}
    objectDetail={props.to}
    href={LinkDestinations[props.to]}
    target={"_blank"}
    rel={"noreferrer noopener"}
    className={"font-medium text-blue02 hover:underline"}
  >
    {props.children}
  </BaseLink>
);

const content: FaqItemProps[] = [
  {
    title:
      "What’s the difference between Intuit TurboTax Verified Pro and other TurboTax services?",
    children: (
      <p>
        <VerifiedPro /> matches you with an independent tax professional in your area whose skills
        match your needs. They can work with you to file your taxes this year and in future years,
        for as long as you’d like. Intuit screens these tax professionals to ensure they have the
        necessary qualifications, but they're professionals who run their own practices. They’ll
        work with you on terms you both agree to.
      </p>
    ),
  },

  {
    title: "When is my independent tax pro available?",
    children: (
      <p>
        After you’re matched with an <VerifiedPro />, they will share the hours they’re available.
      </p>
    ),
  },

  {
    title: "How do I communicate with my Intuit TurboTax Verified Pro?",
    children: (
      <p>
        Before talking with an <VerifiedPro />, you’ll connect with an assistant. They will help you
        confirm which <VerifiedPro /> is the best option for you. Then, we’ll match you with an{" "}
        <VerifiedPro /> who is perfect for handling your unique tax situation. We’ll help set up the
        first meeting, but after that, you can meet with your verified professional whenever you
        like. You’ll have the option to talk on the phone or connect on a video call (It's a one-way
        video, so they won’t be able to see you.) where you can see your pro. You can work with your
        independent tax professional to determine if you want to meet in person at their office
        location And, you’ll have year-round access to your tax pro so you can discuss any life
        changing-events or material changes in your tax situation.
      </p>
    ),
  },

  {
    title: "Can I meet my Intuit TurboTax Verified Pro in person?",
    children: (
      <p>
        That’s up to you and your <VerifiedPro /> to arrange. That's a decision best made between
        you and your pro.
      </p>
    ),
  },

  {
    title: "What qualifications do the Verified Pros have?",
    children: (
      <p>
        The tax professionals in the Verified Pro program are qualified to handle all kinds of
        personal tax situations, from simple to complex. When you connect live with a tax
        professional, you’ll see their profile with their specific years of experience.
      </p>
    ),
  },

  {
    title: "How does Intuit verify these independent tax professionals?",
    children: (
      <p>
        Intuit confirms each professional’s identity, tax preparer authorization to file returns
        with the IRS, any state license or other credential. Intuit also conducts a basic criminal
        background check.
      </p>
    ),
  },

  {
    title: "How do I know my return is accurate?",
    children: (
      <p>
        Intuit’s TurboTax platform runs automated accuracy checks as a final check and Intuit
        provides and accuracy guarantee and back them by our Intuit guarantee. We can help you find
        the best tax professional for your situation and preferences, whether you’re looking for
        someone with CPA or Enrolled Agent credentials, or someone with experience in a tax
        specialty like crypto transactions, rental properties, or business tax.
      </p>
    ),
  },

  {
    title: "What’s the process like?",
    children: (
      <p>
        First, you’ll choose your independent tax pro. From there, we’ll create your personalized
        tax planner to securely collect the right docs, and you’ll schedule your first meeting with
        your local tax professional. When your appointment or call is scheduled with your local pro,
        you can talk to them over the phone or connect on a one-way video call (you’ll see the pro,
        but they won’t see you). They’ll ask questions, get the details they need, and prepare your
        return. After they’ve completed your tax return, they’ll review it with you and answer any
        questions you have. When you’re ready to file and pay, they’ll sign and file your taxes on
        your behalf.
      </p>
    ),
  },

  {
    title: "What do I need to do to prepare?",
    children: (
      <p>
        Not much. We’ll ask you some questions to learn about your tax situation and create a
        personalized tax planner for you. This tax planner tells you what docs you’ll need, so you
        can gather them and start uploading them to your TurboTax account.
      </p>
    ),
  },

  {
    title: "Will a tax professional understand the complexities of my personal tax situation?",
    children: (
      <p>
        We use information about your tax situation to match you with a professional who has
        experience with taxes like yours. During the process, they’ll also learn more about your
        unique situation, so they can make sure your taxes are 100% accurate backed by our guarantee
        before filing. This requires you to share all information as accurately as possible with the
        Pro.
      </p>
    ),
  },

  {
    title: "How will my documents be securely transferred to my tax professional?",
    children: (
      <p>
        Our software allows you to securely upload your tax documents to our system, so they’re
        available to your tax pro. You may be able to import them directly from your employer or
        your financial institutions, or you can snap photos of the documents and upload them to
        TurboTax. We use bank-level encryption technology to ensure your information is protected.
      </p>
    ),
  },

  {
    title: "How long will the process take?",
    children: (
      <p>
        The independent Local Pro will work with you to complete your return as quickly as possible.
        The time to complete your return may vary based on your tax situation and desired working
        model between you and your tax pro.
      </p>
    ),
  },

  {
    title: "How are fees/prices determined?",
    children: (
      <p>
        Pricing depends on the complexity of your tax return, the amount of tax forms required to
        complete your return, and on the <VerifiedPro /> you match with. Your specific price can
        also take into account factors such as your location and the time of year. Your tax expert
        will set the final price for filing after getting to know more about you and your tax
        situation. You’ll know exactly what the final price is before any work is done.
      </p>
    ),
  },

  {
    title: "Is there any type of guarantee if I get audited?",
    children: (
      <>
        <p>
          Yes. Intuit offers free one-on-one audit guidance year-round from our experienced and
          knowledgeable tax staff. And while you’ll need to decide whether to separately engage
          audit representation before the IRS or state, we’ll let you know what to expect and how to
          prepare in the unlikely event you receive an audit letter from the IRS.
        </p>
        <p>
          If you’ve already received a letter from the IRS for a return you filed on the TurboTax
          platform, please review our{" "}
          <Link to={"auditSupportGuarantee"}>Audit Support Guarantee</Link> for instructions on how
          to receive free step–by–step audit guidance and the option to connect with your Intuit
          Verified Tax Pro to discuss any audit.
        </p>
      </>
    ),
  },
];

export default content;
