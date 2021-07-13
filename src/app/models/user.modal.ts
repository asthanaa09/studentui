import { Student } from "./student.modal";

export interface User {
    username: string;
    student: Student;
    roles: string[];
}