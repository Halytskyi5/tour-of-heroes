package com.example.heroesbackend.repository;

import com.example.heroesbackend.entity.HeroEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface HeroRepository extends CrudRepository<HeroEntity, Long>, JpaRepository<HeroEntity, Long> {
}
