package fixplayground;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FixBaseApp {

    @Autowired
    private FixApplication fixApplication;

    @Autowired
    private FixRunner fixRunner;

    public static void main(String[] args) {
        SpringApplication.run(FixBaseApp.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            this.fixRunner.run(ctx);
        };
    }

}