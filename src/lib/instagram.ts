export function formatFollowersCount(count: number) {
  if (count < 1_000) {
    return count;
  } else if (count < 10_000) {
    return `${count.toString().slice(0, 1)},${count.toString().slice(1, 4)}`;
  } else if (count < 1_000_000) {
    return `${count / 1_000}K`;
  } else {
    return `${count / 1_000_000}M`;
  }
}
