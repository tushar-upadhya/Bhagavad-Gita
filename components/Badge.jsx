"use client";

const Badge = ({ containerStyles, icon, badgeText }) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="max-w-[70px] text-[15px] text-slate-600 font-semibold">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
