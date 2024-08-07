'use client';
import React, { useEffect } from 'react';
import teamSkillsProgress from '../../common/teamSkillsProgress';
import tooltipEffect from '../../common/tooltipEffect';
import Team2 from './Team2';

const Team = ({ data, teamImagesData }) => {
  useEffect(() => {
    teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 500);
  }, []);
  return (
    <div className="team-crv section-padding">
      <Team2 data={data} teamImagesData={teamImagesData} />
    </div>
  );
};

export default Team;
