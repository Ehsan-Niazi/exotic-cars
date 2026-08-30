export const MEMBER_DISCOUNT_PERCENT = 15;

export function getDiscountedPrice(price: number): number {
  return Math.round(price * (1 - MEMBER_DISCOUNT_PERCENT / 100));
}
