export class DateTimeHelper {
  static getCurrentDate() {
    const now = new Date();
    return now.toISOString();
  }
}
