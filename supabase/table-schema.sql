CREATE TABLE summaries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT,
  name TEXT,
  doc_type TEXT,
  summary TEXT,
  file_name TEXT,
  mime_type TEXT,
  submitted_at TIMESTAMP DEFAULT now()
);

