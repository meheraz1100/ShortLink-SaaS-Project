export default function ExpiredPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          Link Expired
        </h1>

        <p className="text-muted-foreground">
          This short link is no longer available.
        </p>
      </div>
    </div>
  );
}