export interface Email {
  id  ?: number;
  date ?: string;
  to ?: string;
  from ?: string;
  title ?: string;
  content ?: string;
  important ?: boolean;
  tagged ?: boolean;
  sent ?: boolean;
  draft ?: boolean;
  trash ?: boolean;
}
