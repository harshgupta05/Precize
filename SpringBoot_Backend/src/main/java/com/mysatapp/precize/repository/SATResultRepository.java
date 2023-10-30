package com.mysatapp.precize.repository;

import com.mysatapp.precize.model.SATResult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SATResultRepository extends JpaRepository<SATResult, Long> {
    Optional<SATResult> findByName(String name);
}
