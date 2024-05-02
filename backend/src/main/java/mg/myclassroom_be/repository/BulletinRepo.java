package mg.myclassroom_be.repository;

import mg.myclassroom_be.entity.Bulletin;
import mg.myclassroom_be.entity.Eleve;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BulletinRepo extends JpaRepository<Bulletin, Integer> {
}
