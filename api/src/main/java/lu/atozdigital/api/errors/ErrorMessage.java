package lu.atozdigital.api.errors;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
public class ErrorMessage {
    private HttpStatus status;
    private String message;
}
