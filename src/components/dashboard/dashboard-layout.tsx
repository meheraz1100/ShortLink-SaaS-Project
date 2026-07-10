import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dashboard-sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-background">

      {/* Desktop Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">

        <DashboardHeader />

        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}