import Scene3D from '@/components/3d/Scene';
import MainForm from '@/components/forms/MainForm';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <Scene3D />
      <main className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center py-8">
        <MainForm />
      </main>
    </div>
  );
}
