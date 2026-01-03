"use client";

export default function Error({ error } : { error: Error }) {
    return <div>Failed to load detail page: {error.message}</div>;
}

// file nay de hien thi khi trang detail/id bi loi