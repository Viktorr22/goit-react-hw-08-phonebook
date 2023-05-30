import { SectionBox } from './Section.styled';

export function Section({ children }) {
  return (
    <SectionBox>
      <div>{children}</div>
    </SectionBox>
  );
}
