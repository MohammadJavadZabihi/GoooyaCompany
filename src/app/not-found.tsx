import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center">
      <Container className="py-20 text-center">
        <p className="text-sm font-medium text-accent">۴۰۴</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          این صفحه پیدا نشد
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          یا آدرس اشتباه است، یا صفحه جابه‌جا شده. از اینجا می‌توانید به مسیرهای
          اصلی برگردید.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">بازگشت به خانه</Button>
          <Button href="/products" variant="secondary">
            محصولات
          </Button>
        </div>
        <p className="mt-10 text-sm text-subtle">
          نیاز به کمک دارید؟{" "}
          <Link href="/contact" className="text-accent hover:underline">
            با گویا تماس بگیرید
          </Link>
        </p>
      </Container>
    </div>
  );
}
