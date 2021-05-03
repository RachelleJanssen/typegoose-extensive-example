export class ObjectHelpers {
  public static isNonNullObject(potentialObject: unknown): boolean {
    return typeof potentialObject === "object" && potentialObject !== null;
  }

  public static isNonEmptyObject(potentialObject: unknown): boolean {
    if (typeof potentialObject !== "object" || potentialObject === null) {
      return false;
    }
    return Object.entries(potentialObject as {[key: string]: unknown}).length > 0;
  }

  public static isEmptyObject(potentialObject: unknown): boolean {
    if (typeof potentialObject !== "object" || potentialObject === null) {
      return false;
    }
    return Object.entries(potentialObject as {[key: string]: unknown}).length === 0;
  }
}
