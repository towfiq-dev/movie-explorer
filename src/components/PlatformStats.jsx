import React from "react";
import { 
  HiOutlineFilm, 
  HiOutlineUserGroup, 
  HiOutlineGlobeAlt, 
  HiOutlineSparkles 
} from "react-icons/hi";

const statsData = [
  {
    id: 1,
    label: "Total Titles Indexed",
    value: "240,000+",
    description: "Movies, episodic sagas & limited series",
    icon: HiOutlineFilm,
    color: "from-blue-500/20 to-indigo-500/20 text-blue-500 border-blue-500/30",
  },
  {
    id: 2,
    label: "Active Viewers",
    value: "1.2M+",
    description: "Monthly cinema and TV aficionados",
    icon: HiOutlineUserGroup,
    color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
  },
  {
    id: 3,
    label: "Countries Covered",
    value: "80+",
    description: "International broadcast networks & OTTs",
    icon: HiOutlineGlobeAlt,
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: 4,
    label: "Average Rating",
    value: "8.4 / 10",
    description: "Aggregated critic and community scores",
    icon: HiOutlineSparkles,
    color: "from-amber-500/20 to-orange-500/20 text-amber-500 border-amber-500/30",
  },
];

const PlatformStats = () => {
  return (
    <section className="py-14 px-4 md:px-10 max-w-7xl mx-auto border-t border-base-content/5">
      {/* Background Container Card */}
      <div className="relative rounded-3xl bg-base-200/40 border border-base-content/10 p-6 sm:p-10 overflow-hidden shadow-sm">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Title */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
          <span className="badge badge-primary badge-outline text-xs font-semibold uppercase tracking-wider mb-3">
            Realtime Analytics
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            The Numbers Behind MovieExplorer
          </h2>
          <p className="text-xs sm:text-sm text-base-content/60 mt-2">
            Delivering rich, real-time cinema and television intelligence seamlessly across the globe.
          </p>
        </div>

        {/* 4-Column Stats Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map(({ id, label, value, description, icon: Icon, color }) => (
            <div
              key={id}
              className="p-5 rounded-2xl bg-base-100/70 backdrop-blur-md border border-base-content/10 shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
                  {label}
                </span>
                <div
                  className={`p-2.5 rounded-xl border bg-base-100 ${color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="text-lg" />
                </div>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-base-content block group-hover:text-primary transition-colors">
                  {value}
                </span>
                <p className="text-xs text-base-content/60 mt-1.5 leading-relaxed font-normal">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;