import {
  siteData as defaultSiteData,
  programsData as defaultPrograms,
  postsData as defaultPosts,
  eventsData as defaultEvents,
  announcementsData as defaultAnnouncements,
  galleryData as defaultGallery,
  leadershipData as defaultLeadership,
  SiteSettings,
  Post,
  EventItem,
  ProgramItem,
  AnnouncementItem,
  GalleryItem,
  StaffItem
} from "@/data/mockData";

export interface AppDataState {
  site: SiteSettings;
  posts: Post[];
  events: EventItem[];
  programs: ProgramItem[];
  announcements: AnnouncementItem[];
  gallery: GalleryItem[];
  leadership: StaffItem[];
}

const STORAGE_KEY = "pondok_cms_data_v2";

export function getDefaultData(): AppDataState {
  return {
    site: defaultSiteData,
    posts: defaultPosts,
    events: defaultEvents,
    programs: defaultPrograms,
    announcements: defaultAnnouncements,
    gallery: defaultGallery,
    leadership: defaultLeadership,
  };
}

export function getInitialData(): AppDataState {
  if (typeof window === "undefined") {
    return getDefaultData();
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial: AppDataState = {
        site: defaultSiteData,
        posts: defaultPosts,
        events: defaultEvents,
        programs: defaultPrograms,
        announcements: defaultAnnouncements,
        gallery: defaultGallery,
        leadership: defaultLeadership,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to parse localStorage data", err);
    return {
      site: defaultSiteData,
      posts: defaultPosts,
      events: defaultEvents,
      programs: defaultPrograms,
      announcements: defaultAnnouncements,
      gallery: defaultGallery,
      leadership: defaultLeadership,
    };
  }
}

export function saveAppData(data: AppDataState) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event("pondok_data_updated"));
  }
}

export function resetToDefaults(): AppDataState {
  const initial: AppDataState = {
    site: defaultSiteData,
    posts: defaultPosts,
    events: defaultEvents,
    programs: defaultPrograms,
    announcements: defaultAnnouncements,
    gallery: defaultGallery,
    leadership: defaultLeadership,
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    window.dispatchEvent(new Event("pondok_data_updated"));
  }
  return initial;
}
