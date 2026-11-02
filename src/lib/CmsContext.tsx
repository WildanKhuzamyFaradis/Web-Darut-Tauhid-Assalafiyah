"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AppDataState, getDefaultData, getInitialData, saveAppData, resetToDefaults } from "./dataStore";
import { Post, EventItem, ProgramItem, AnnouncementItem, GalleryItem, SiteSettings } from "@/data/mockData";

interface CmsContextType {
  data: AppDataState;
  updateSite: (site: Partial<SiteSettings>) => void;
  // Posts
  addPost: (post: Omit<Post, "id">) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
  // Events
  addEvent: (event: Omit<EventItem, "id">) => void;
  updateEvent: (id: string, event: Partial<EventItem>) => void;
  deleteEvent: (id: string) => void;
  // Programs
  addProgram: (program: Omit<ProgramItem, "id">) => void;
  updateProgram: (id: string, program: Partial<ProgramItem>) => void;
  deleteProgram: (id: string) => void;
  // Announcements
  addAnnouncement: (announcement: Omit<AnnouncementItem, "id">) => void;
  updateAnnouncement: (id: string, announcement: Partial<AnnouncementItem>) => void;
  deleteAnnouncement: (id: string) => void;
  // Gallery
  addGalleryItem: (item: Omit<GalleryItem, "id">) => void;
  updateGalleryItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;
  // Reset
  resetData: () => void;
}

const CmsContext = createContext<CmsContextType | null>(null);

export function CmsProvider({ children }: { children: React.ReactNode }) {
  // Always initialize with default static data during SSR and initial hydration
  // to avoid hydration mismatch when localStorage differs on the client
  const [data, setData] = useState<AppDataState>(getDefaultData);

  useEffect(() => {
    // Only load from localStorage after client has safely mounted
    setData(getInitialData());

    const handleUpdate = () => {
      setData(getInitialData());
    };

    window.addEventListener("pondok_data_updated", handleUpdate);
    return () => window.removeEventListener("pondok_data_updated", handleUpdate);
  }, []);

  const updateSite = (patch: Partial<SiteSettings>) => {
    const next: AppDataState = {
      ...data,
      site: { ...data.site, ...patch },
    };
    setData(next);
    saveAppData(next);
  };

  // Posts
  const addPost = (post: Omit<Post, "id">) => {
    const newId = Date.now().toString();
    const next: AppDataState = {
      ...data,
      posts: [{ id: newId, ...post }, ...data.posts],
    };
    setData(next);
    saveAppData(next);
  };

  const updatePost = (id: string, patch: Partial<Post>) => {
    const next: AppDataState = {
      ...data,
      posts: data.posts.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    };
    setData(next);
    saveAppData(next);
  };

  const deletePost = (id: string) => {
    const next: AppDataState = {
      ...data,
      posts: data.posts.filter((p) => p.id !== id),
    };
    setData(next);
    saveAppData(next);
  };

  // Events
  const addEvent = (event: Omit<EventItem, "id">) => {
    const newId = Date.now().toString();
    const next: AppDataState = {
      ...data,
      events: [{ id: newId, ...event }, ...data.events],
    };
    setData(next);
    saveAppData(next);
  };

  const updateEvent = (id: string, patch: Partial<EventItem>) => {
    const next: AppDataState = {
      ...data,
      events: data.events.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    };
    setData(next);
    saveAppData(next);
  };

  const deleteEvent = (id: string) => {
    const next: AppDataState = {
      ...data,
      events: data.events.filter((e) => e.id !== id),
    };
    setData(next);
    saveAppData(next);
  };

  // Programs
  const addProgram = (program: Omit<ProgramItem, "id">) => {
    const newId = Date.now().toString();
    const next: AppDataState = {
      ...data,
      programs: [...data.programs, { id: newId, ...program }],
    };
    setData(next);
    saveAppData(next);
  };

  const updateProgram = (id: string, patch: Partial<ProgramItem>) => {
    const next: AppDataState = {
      ...data,
      programs: data.programs.map((pr) => (pr.id === id ? { ...pr, ...patch } : pr)),
    };
    setData(next);
    saveAppData(next);
  };

  const deleteProgram = (id: string) => {
    const next: AppDataState = {
      ...data,
      programs: data.programs.filter((pr) => pr.id !== id),
    };
    setData(next);
    saveAppData(next);
  };

  // Announcements
  const addAnnouncement = (ann: Omit<AnnouncementItem, "id">) => {
    const newId = Date.now().toString();
    const next: AppDataState = {
      ...data,
      announcements: [{ id: newId, ...ann }, ...data.announcements],
    };
    setData(next);
    saveAppData(next);
  };

  const updateAnnouncement = (id: string, patch: Partial<AnnouncementItem>) => {
    const next: AppDataState = {
      ...data,
      announcements: data.announcements.map((a) => (a.id === id ? { ...a, ...patch } : a)),
    };
    setData(next);
    saveAppData(next);
  };

  const deleteAnnouncement = (id: string) => {
    const next: AppDataState = {
      ...data,
      announcements: data.announcements.filter((a) => a.id !== id),
    };
    setData(next);
    saveAppData(next);
  };

  // Gallery
  const addGalleryItem = (item: Omit<GalleryItem, "id">) => {
    const newId = Date.now().toString();
    const next: AppDataState = {
      ...data,
      gallery: [{ id: newId, ...item }, ...data.gallery],
    };
    setData(next);
    saveAppData(next);
  };

  const updateGalleryItem = (id: string, patch: Partial<GalleryItem>) => {
    const next: AppDataState = {
      ...data,
      gallery: data.gallery.map((g) => (g.id === id ? { ...g, ...patch } : g)),
    };
    setData(next);
    saveAppData(next);
  };

  const deleteGalleryItem = (id: string) => {
    const next: AppDataState = {
      ...data,
      gallery: data.gallery.filter((g) => g.id !== id),
    };
    setData(next);
    saveAppData(next);
  };

  const resetData = () => {
    const fresh = resetToDefaults();
    setData(fresh);
  };

  return (
    <CmsContext.Provider
      value={{
        data,
        updateSite,
        addPost,
        updatePost,
        deletePost,
        addEvent,
        updateEvent,
        deleteEvent,
        addProgram,
        updateProgram,
        deleteProgram,
        addAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        resetData,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
}

export function useCms() {
  const ctx = useContext(CmsContext);
  if (!ctx) {
    throw new Error("useCms must be used within CmsProvider");
  }
  return ctx;
}
