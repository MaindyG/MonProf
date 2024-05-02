package mg.myclassroom_be.repository;

import mg.myclassroom_be.entity.Prof;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfRepo extends JpaRepository<Prof,Integer> {
}
