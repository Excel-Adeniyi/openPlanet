interface PropType {
  splitKey: string;
  content: string;
}
export const Splitteer = (props: PropType): string[] => {
  return props.content.split(props.splitKey);
};
