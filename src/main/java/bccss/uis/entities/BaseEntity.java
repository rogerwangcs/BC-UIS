/*
 * Property of BCCSS - UIS Team
 */

package bccss.uis.entities;

import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

/**
 * Base Entity
 */

//Base Entity to be extended by all other entities
@MappedSuperclass
public class BaseEntity {

    @Column(name="DELETED")
    @Type(type="yes_no")
    private Boolean deleted;

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }
}
