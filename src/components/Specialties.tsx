import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  HomeIcon,
  ReceiptRefundIcon,
  UsersIcon,
  PresentationChartLineIcon,
  GiftIcon,
  PaperAirplaneIcon,
  GlobeAsiaAustraliaIcon,
  GlobeAmericasIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "Request time off",
    href: "#",
    icon: PresentationChartLineIcon,
    iconForeground: "text-agave70",
    iconBackground: "bg-agave10",
  },
  {
    title: "Benefits",
    href: "#",
    icon: HomeIcon,
    iconForeground: "text-dragonfruit70",
    iconBackground: "bg-dragonfruit10",
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: GiftIcon,
    iconForeground: "text-blueberry70",
    iconBackground: "bg-blueberry10",
  },
  {
    title: "Payroll",
    href: "#",
    icon: GlobeAsiaAustraliaIcon,
    iconForeground: "text-honey70",
    iconBackground: "bg-honey10",
  },
  {
    title: "Submit an expense",
    href: "#",
    icon: HomeModernIcon,
    iconForeground: "text-watermelon70",
    iconBackground: "bg-watermelon10",
  },
  {
    title: "Training",
    href: "#",
    icon: GlobeAmericasIcon,
    iconForeground: "text-eggplant70",
    iconBackground: "bg-eggplant10",
  },
];

export interface SpecialtiesProps {
  specialties?: string[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Specialties({ specialties }: SpecialtiesProps) {
  if (specialties && specialties.length < 1) {
    return null;
  }

  return (
    <div className="divide-y divide-pepper20 overflow-hidden rounded bg-pepper10 shadow s:grid s:grid-cols-2 s:gap-px s:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0 ? "rounded-tl rounded-tr s:rounded-tr-none" : "",
            actionIdx === 1 ? "s:rounded-tr" : "",
            actionIdx === actions.length - 2 ? "s:rounded-bl" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl rounded-br s:rounded-bl-none"
              : "",
            "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-logointuit",
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "inline-flex rounded p-3 ring-4 ring-white",
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-pepper110">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {specialties?.[actionIdx]}
              </a>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
