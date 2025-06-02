export const arrayMove = <T>(array: T[], from: number, to: number): T[] => {
  const updated = [...array];
  const [moved] = updated.splice(from, 1);
  updated.splice(to, 0, moved);
  return updated;
};
