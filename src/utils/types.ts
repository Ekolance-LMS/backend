import { ProgrammeStatus } from './enums';

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

export type CreateProgrammeParams = {
  title: string;
  description: string;
  linkToFlier: string;
  applicationDeadline: Date;
  adminId: number;
};

export type UpdateProgrammeParams = {
  title: string;
  description: string;
  linkToFlier: string;
  applicationDeadline: Date;
  status: ProgrammeStatus;
};

export type CreateStudentParams = {
  walletAddress: string;
};

export type UpdateStudentParams = {
  fullName: string;
  email: string;
};

export type CreateAssignmentSubmissionParams = { link: string };

export type UpdateAssignmentSubmissionParams = { link: string };
