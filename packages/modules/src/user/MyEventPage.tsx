import React from 'react';
import { SeoMeta, Typography } from 'ui';
import { UserEventCard } from './UserEventCard';
import { EVENTDATA } from '../constants';
import { useTypeSafeTranslation } from '../shared-hooks';

export const MyEventPage = () => {
  const { t } = useTypeSafeTranslation();
  return (
    <>
      <SeoMeta title="My Events - Prutteka" description="" />
      <div className="flex flex-col gap-6">
        <Typography weight="bold" className="uppercase" variant="h4">
          {t('my-event-page.my-event')}
        </Typography>
        <div className="space-y-4">
          {EVENTDATA.map((eventData) => {
            return (
              <UserEventCard
                key={eventData.id}
                location={eventData.location}
                date={eventData.date}
                href=""
                img={eventData.img}
                title={eventData.title}
                time={eventData.time}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};