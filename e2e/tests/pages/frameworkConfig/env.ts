export class Env {
  public static readonly BASE_URL: string =
    process.env.BASE_URL ??
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  public static readonly ACCOUNT_USERNAME: string =
    process.env.account_username ?? "Admin";

  public static readonly ACCOUNT_PASSWORD: string =
    process.env.account_password ?? "admin123";
}
