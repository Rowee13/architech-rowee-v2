const SkillRating = ({ value }) => {
  return (
    <div>
      <p className="font-lato text-whisper-white text-xs">
        Self Assessment: <i>(skill level)</i>
      </p>
      <div className="flex flex-row items-center pb-3">
        <progress
          className="progress progress-accent w-56 bg-bunker-gray-400"
          value={value}
          max="10"
        ></progress>
        <p className="text-sm">{value}/10</p>
      </div>
      <p className="font-lato text-whisper-white text-xs">
        <i>Note:</i> This assessment has no basis. Just part of UI feature.{" "}
        <br />
        <i>
          Skills below 4 are just used for a short period of time. <br />
          Need more practice.
        </i>
      </p>
    </div>
  );
};

export default SkillRating;
