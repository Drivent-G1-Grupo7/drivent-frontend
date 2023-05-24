import ActivityOptionsEvents from './ActitityOptionsEvents';
import { ActivityOptionsTitleWrapper, ActivityOptionsWrapper, AtctivityOptionsTitle } from './ActivityOptionsWrapper';

export default function ActivityOptions({ selectedDate }) {
  return (
    <ActivityOptionsWrapper>
      <ActivityOptionsTitleWrapper>
        <AtctivityOptionsTitle>Auditório Principal</AtctivityOptionsTitle>
        <AtctivityOptionsTitle>Auditório Lateral</AtctivityOptionsTitle>
        <AtctivityOptionsTitle>Sala de Workshop</AtctivityOptionsTitle>
      </ActivityOptionsTitleWrapper>
      <ActivityOptionsEvents selectedDate={selectedDate} />
    </ActivityOptionsWrapper>
  );
}
