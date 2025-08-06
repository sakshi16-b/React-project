
const employees = [
  {
    id: 1,
    name: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      completed: 2,
      failed: 1,
      newTask: 1 // assuming 'pending' is treated as new task
    },
    tasks: [
      {
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile sales data for Q2 report.",
        taskDate: "2025-07-01",
        category: "Reporting",
        active: true,
        status: "completed"
      },
      {
        taskTitle: "Team Standup Meeting",
        taskDescription: "Daily morning team sync.",
        taskDate: "2025-07-03",
        category: "Meeting",
        active: true,
        status: "pending"
      },
      {
        taskTitle: "Update Client Records",
        taskDescription: "Enter updated client contact details in CRM.",
        taskDate: "2025-07-05",
        category: "Data Entry",
        active: false,
        status: "failed"
      },
      {
        taskTitle: "Client Follow-up",
        taskDescription: "Check with client about the project update.",
        taskDate: "2025-07-06",
        category: "Communication",
        active: true,
        status: "completed"
      }
    ]
  },
  {
    id: 2,
    name: "Neha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      completed: 2,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "UI Mockup Design",
        taskDescription: "Design mockups for new landing page.",
        taskDate: "2025-07-02",
        category: "Design",
        active: true,
        status: "completed"
      },
      {
        taskTitle: "Bug Fixing Session",
        taskDescription: "Fix priority bugs from QA team.",
        taskDate: "2025-07-04",
        category: "Development",
        active: true,
        status: "pending"
      },
      {
        taskTitle: "App Deployment",
        taskDescription: "Deploy latest version of app to server.",
        taskDate: "2025-07-07",
        category: "Deployment",
        active: false,
        status: "completed"
      }
    ]
  },
  {
    id: 3,
    name: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 4,
      completed: 2,
      failed: 1,
      newTask: 2
    },
    tasks: [
      {
        taskTitle: "Candidate Interview",
        taskDescription: "Interview backend developer candidate.",
        taskDate: "2025-07-02",
        category: "HR",
        active: true,
        status: "completed"
      },
      {
        taskTitle: "Employee Review",
        taskDescription: "Conduct performance reviews.",
        taskDate: "2025-07-05",
        category: "HR",
        active: true,
        status: "pending"
      },
      {
        taskTitle: "Workshop Planning",
        taskDescription: "Plan team-building workshop.",
        taskDate: "2025-07-08",
        category: "Training",
        active: true,
        status: "failed"
      },
      {
        taskTitle: "HR Policy Update",
        taskDescription: "Review and update HR policies.",
        taskDate: "2025-07-09",
        category: "Compliance",
        active: true,
        status: "completed"
      },
      {
        taskTitle: "New Hire Onboarding",
        taskDescription: "Complete onboarding process.",
        taskDate: "2025-07-12",
        category: "HR",
        active: true,
        status: "pending"
      }
    ]
  },
  {
    id: 4,
    name: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      completed: 3,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Stock Inventory Check",
        taskDescription: "Check stock levels for warehouse.",
        taskDate: "2025-07-01",
        category: "Logistics",
        active: true,
        status: "completed"
      },
      {
        taskTitle: "Vendor Discussion",
        taskDescription: "Negotiate contract with vendor.",
        taskDate: "2025-07-04",
        category: "Procurement",
        active: true,
        status: "pending"
      },
      {
        taskTitle: "Shipment Monitoring",
        taskDescription: "Track shipment for client orders.",
        taskDate: "2025-07-05",
        category: "Logistics",
        active: false,
        status: "failed"
      },
      {
        taskTitle: "Invoice Reconciliation",
        taskDescription: "Cross-check invoices with accounts.",
        taskDate: "2025-07-06",
        category: "Finance",
        active: true,
        status: "completed"
      },
      {
        taskTitle: "System Audit",
        taskDescription: "Audit supply chain management software.",
        taskDate: "2025-07-09",
        category: "IT",
        active: false,
        status: "completed"
      }
    ]
  },
  {
    id: 5,
    name: "Kiran",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      completed: 2,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Create Social Media Content",
        taskDescription: "Design content for Instagram post.",
        taskDate: "2025-07-02",
        category: "Marketing",
        active: true,
        status: "completed"
      },
      {
        taskTitle: "SEO Audit Report",
        taskDescription: "Prepare report on SEO performance.",
        taskDate: "2025-07-04",
        category: "SEO",
        active: true,
        status: "pending"
      },
      {
        taskTitle: "Customer Feedback Review",
        taskDescription: "Analyze feedback from customers.",
        taskDate: "2025-07-06",
        category: "Support",
        active: false,
        status: "failed"
      },
      {
        taskTitle: "Newsletter Design",
        taskDescription: "Design company newsletter.",
        taskDate: "2025-07-08",
        category: "Marketing",
        active: true,
        status: "completed"
      }
    ]
  }
];
const admin = [{
  "id": 100,
  "email": "admin@me.com",
  "password": "123"
}
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))

}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(admin,employees)

  return { employees, admin };
}
