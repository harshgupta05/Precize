package com.mysatapp.precize.service;

import com.mysatapp.precize.model.SATResult;

import java.util.List;
import java.util.Optional;

public interface SATResultService {
    List<SATResult> getAllSATResults();
    Optional<SATResult> getSATResultByName(String name);
    SATResult insertSATResult(SATResult satResult);
    boolean updateSATResultScore(String name, int newScore);
    void deleteSATResult(String name);
}
