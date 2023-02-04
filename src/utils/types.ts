export type CreateAnnouncementParams = {
  title: string;
  content: string;
  programmeId: number;
  tutorId: number;
  adminId: number;
};

export type UpdateAnnouncementParams = {
  title: string;
  content: string;
};
