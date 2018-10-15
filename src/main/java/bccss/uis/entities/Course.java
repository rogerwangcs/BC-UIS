/*
 * Property of BCCSS - UIS Team
 */

package bccss.uis.entities;

import javax.persistence.*;

/**
 * Course Entity
 */

@Entity
@Table(name = "COURSE", schema = "UIS")
public class Course extends BaseEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name="NAME")
    private String name;

    @Column(name="DEPARTMENT")
    private String department;

    @Column(name="NUMBER")
    private String number;

    @Column(name="PROFESSOR")
    private String professor;

    @Column(name="DAYS")
    private String days;

    @Column(name="START")
    private String start;

    @Column(name = "END")
    private String end;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getDays() {
        return days;
    }

    public void setDays(String days) {
        this.days = days;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }
}
