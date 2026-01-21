export const boardData = [
  {
    id: "todo",
    title: "To Do",
    count: 3,
    tasks: [
      {
        id: 1,
        title: "Design homepage wireframes",
        tags: ["Design"],
        date: "Dec 15",
        color: "red",
        assignee: "JB",
      },
      {
        id: 2,
        title: "Fix navigation menu bug",
        tags: ["Bug"],
        date: null,
        color: "orange",
        assignee: "JB",
      },
      {
        id: 3,
        title: "Create component library",
        tags: ["Design", "Feature"],
        date: "Dec 18",
        color: "yellow",
        assignee: "RC",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    count: 2,
    tasks: [
      {
        id: 4,
        title: "Implement user authentication",
        tags: ["Feature"],
        date: "Dec 12",
        color: "red",
        assignee: "RC",
      },
      {
        id: 5,
        title: "Database optimization",
        tags: ["Enhancement"],
        date: null,
        color: "orange",
        assignee: "JB",
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    count: 1,
    tasks: [
      {
        id: 6,
        title: "Update API documentation",
        tags: ["Documentation"],
        date: "Dec 20",
        color: "green",
        assignee: "KT",
      },
    ],
  },
    {
    id: "done",
    title: "Done",
    count: 0,
    tasks: [],
    },
];
