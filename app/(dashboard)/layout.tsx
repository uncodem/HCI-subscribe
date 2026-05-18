import BottomBar from "@/app/components/BottomBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-[100dvh] max-w-md w-full mx-auto bg-white shadow-xl overflow-hidden flex flex-col">
      
      <div className="flex-1 overflow-hidden w-full h-full">
        {children}
      </div>

      <BottomBar/>
    </div>
  );
}