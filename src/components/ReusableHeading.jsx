/* eslint-disable react/prop-types */

const ReusableHeading = ({tagline, SectionTitle, SectionIntro, addClass, secTitleColor, addIntroClass }) => {
  return (
    <div className={`sectionHeader ${addClass}`}>
      <span className={`tagline ${secTitleColor}`}>
        {tagline}
      </span>
      <h2 className={`secTitle ${secTitleColor}`} dangerouslySetInnerHTML={{ __html: SectionTitle }} ></h2> 
      <p className={`secIntro ${addIntroClass}`}>
        {SectionIntro}
      </p>
    </div>
  );
};

export default ReusableHeading;