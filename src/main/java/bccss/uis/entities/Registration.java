/*
 * Property of BCCSS - UIS Team
 */

package bccss.uis.entities;

import javax.persistence.*;

/**
 * Registration Entity
 */

@Entity
@Table(name = "REGISTRATION", schema = "UIS")
public class Registration extends BaseEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name="COURSE_ID")
    private Long courseId;

    @Column(name="EagleId")
    private String eagleId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getEagleId() {
        return eagleId;
    }

    public void setEagleId(String eagleId) {
        this.eagleId = eagleId;
    }
}
