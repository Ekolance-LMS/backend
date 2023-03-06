import { HackathonsStatus, ProgrammeStatus, RESOURCE_TYPE } from './enums';

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

export type CreateResourceParams = {
  title: string;
  description: string;
  link: string;
  tutorId: number;
  resourceType: RESOURCE_TYPE;
};

export type UpdateResourceParams = {
  title: string;
  description: string;
  link: string;
  resourceType: RESOURCE_TYPE;
};

export type CreateAssignmentParams = {
  deadline: Date;
  link: string;
  tutorId: number;
  programmeId: number;
};

export type UpdateAssignmentParams = {
  deadline: Date;
  link: string;
};

export type CreateTutorParams = {
  walletAddress: string;
};

export type UpdateTutorParams = {
  fullName: string;
  email: string;
};

export type CreateHackathonParams = {
  title: string;
  description: string;
  linkToHackathon: string;
  applicationDeadline: Date;
  status: HackathonsStatus;
}

export type UpdateHackathonParams = {
  title: string;
  description: string;
  linkToHackathon: string;
  applicationDeadline: Date;
  status: HackathonsStatus;
}

