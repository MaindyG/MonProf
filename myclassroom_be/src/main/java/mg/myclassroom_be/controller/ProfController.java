package mg.myclassroom_be.controller;

import mg.myclassroom_be.entity.Eleve;
import mg.myclassroom_be.entity.Prof;
import mg.myclassroom_be.repository.EleveRepo;
import mg.myclassroom_be.repository.ProfRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfController {

    @Autowired
    private ProfRepo profRepo;

    @PostMapping("/newprof")
    Prof newProf(@RequestBody Prof newProf) {
        return profRepo.save(newProf);
    }


}
