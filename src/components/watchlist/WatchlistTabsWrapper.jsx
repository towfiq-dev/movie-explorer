import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HiHeart, HiArrowDownTray } from "react-icons/hi2";
import WatchlistListItem from "./WatchlistListItem";
import WatchlistEmptyState from "./WatchlistEmptyState";

const WatchlistTabsWrapper = ({
  watchlist,
  downloads,
  onDetails,
  onRemoveWatchlist,
  onRemoveDownload,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      className="w-full"
    >
      {/* Modern Sleek Tab Navigation */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <TabList className="flex items-center gap-2 p-1.5 rounded-2xl bg-base-300/40 backdrop-blur-md border border-base-content/10">
          
          {/* Tab 1: Watchlist */}
          <Tab className="outline-none focus:outline-none cursor-pointer">
            <div
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 select-none ${
                selectedIndex === 0
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                  : "text-base-content/60 hover:text-base-content hover:bg-base-content/5"
              }`}
            >
              <HiHeart className={`text-base transition-transform duration-200 ${selectedIndex === 0 ? "scale-110" : ""}`} />
              <span>Watchlist</span>
              <span
                className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                  selectedIndex === 0
                    ? "bg-white/20 text-white"
                    : "bg-base-content/10 text-base-content/70"
                }`}
              >
                {watchlist.length}
              </span>
            </div>
          </Tab>

          {/* Tab 2: Downloads */}
          <Tab className="outline-none focus:outline-none cursor-pointer">
            <div
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 select-none ${
                selectedIndex === 1
                  ? "bg-primary text-primary-content shadow-md shadow-primary/20"
                  : "text-base-content/60 hover:text-base-content hover:bg-base-content/5"
              }`}
            >
              <HiArrowDownTray className={`text-base transition-transform duration-200 ${selectedIndex === 1 ? "scale-110" : ""}`} />
              <span>Offline Downloads</span>
              <span
                className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                  selectedIndex === 1
                    ? "bg-white/20 text-primary-content"
                    : "bg-base-content/10 text-base-content/70"
                }`}
              >
                {downloads.length}
              </span>
            </div>
          </Tab>
        </TabList>

        {/* Dynamic Item Counter Label */}
        <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider hidden sm:block">
          Showing {selectedIndex === 0 ? watchlist.length : downloads.length} {selectedIndex === 0 ? "saved movies" : "offline files"}
        </span>
      </div>

      {/* Tab Panel 1: Watchlist Items */}
      <TabPanel className="outline-none focus:outline-none">
        {watchlist.length === 0 ? (
          <WatchlistEmptyState activeTab="watchlist" />
        ) : (
          <div className="space-y-4">
            {watchlist.map((show) => (
              <WatchlistListItem
                key={show.id}
                show={show}
                isWatchlist={true}
                onDetails={() => onDetails(show)}
                onRemove={() => onRemoveWatchlist(show)}
              />
            ))}
          </div>
        )}
      </TabPanel>

      {/* Tab Panel 2: Download Items */}
      <TabPanel className="outline-none focus:outline-none">
        {downloads.length === 0 ? (
          <WatchlistEmptyState activeTab="downloads" />
        ) : (
          <div className="space-y-4">
            {downloads.map((show) => (
              <WatchlistListItem
                key={show.id}
                show={show}
                isWatchlist={false}
                onDetails={() => onDetails(show)}
                onRemove={() => onRemoveDownload(show.id, show.name)}
              />
            ))}
          </div>
        )}
      </TabPanel>
    </Tabs>
  );
};

export default WatchlistTabsWrapper;